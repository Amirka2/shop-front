import React, {useEffect, useRef, useState} from 'react';
import {useParams} from "react-router";
import {observer} from "mobx-react";

import {
  createProduct,
  deleteProduct,
  getCategoryById, getManufacturers,
  getSubCategoryById,
  getSubCategoryProducts
} from "@/pages/AdminSubCategory/api";
import {AdminHeader, AdminProductCard} from "@/shared/components";
import {Minus, Plus} from "@/shared/ui";
import {IManufacturer, IProduct} from "@/entities";
import {useStores, useToken} from "@/shared/hooks";
import {AdminLayout} from "@/shared/ui/Layouts";

import {Editor} from './Editor';

import * as Styles from './AdminSubCategory.styles';

export interface SubCategoryPageProps {
  categoryName: string;
  subCategoryName: string;
  products: IProduct[];
}

export const AdminSubCategory = observer(() => {
  const params = useParams();
  const {productsStore} = useStores();
  const [token] = useToken();

  const {products} = productsStore;

  let subCategory: SubCategoryPageProps = {
    categoryName: 'Category',
    subCategoryName: 'SubCategory',
    products: products.filter((p) => p.subCategoryId === Number(params.subCategoryId)),
  }

  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productShortDescription, setProductShortDescription] = useState('');
  const [isEditorOpen, setEditorOpen] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [title, setTitle] = useState<
    { category: string, subCategory: string }
  >({category: '', subCategory: ''});
  const [manufacturers, setManufacturers] = useState<IManufacturer[]>([]);
  const [productManufacturerId, setProductManufacturerId] = useState<number | null>(null);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductName(e.target.value)
  }

  const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProductPrice(e.target.value)
  }

  const handleChangeDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setProductShortDescription(e.target.value)
  }

  const handleManufacturerSelect = (id: number) => {
    setProductManufacturerId(id)
  }

  const handleAddProduct = () => {
    setLoading(true);

    if (!productManufacturerId) {
      return null;
    }

    const product = {
      subCategoryId: Number(params.subCategoryId),
      inStock: true,
      price: Number(productPrice),
      name: productName,
      shortDescription: productShortDescription,
      photos: [],
      productDescriptions: [],
      manufacturerId: productManufacturerId,
      priority: 1,
    };
    createProduct(token, product)
      .then(() => setLoading(false));
  }

  const handleSave = () => {
    handleAddProduct();
    setEditorOpen(false);
  }

  const handleDeleteProduct = (id: number) => {
    setLoading(true);

    deleteProduct(token, id)
      .then(() => setLoading(false));
  }

  const reloadRef = useRef(null);

  useEffect(() => {
    getSubCategoryProducts(Number(params.subCategoryId))
      .then(res => {
        productsStore.set(res)
      });
  }, [isLoading])

  useEffect(() => {
      getCategoryById(Number(params!.categoryId))
        .then(res => {
          setTitle(prev => {
            return {
              ...prev,
              category: res.name
            }
          })
        });

      getSubCategoryById(Number(params!.subCategoryId))
        .then(res => {
          setTitle(prev => {
            console.log(res)
            return {
              ...prev,
              subCategory: res.name
            }
          })
        });

      getManufacturers()
        .then(res => {
          setManufacturers(res);
        })
  }, [])

      // FIXME добавить названия
  return (
    <AdminLayout>
      <AdminHeader title={`${title.category}/${title.subCategory}`}/>
      <Styles.AddButton onClick={() => setEditorOpen((prev) => !prev)}>
        {isEditorOpen ? <Minus /> : <Plus/>}
      </Styles.AddButton>
      {isEditorOpen && (
        <Editor
          handleNameChange={handleChangeName}
          handlePriceChange={handleChangePrice}
          handleDescriptionChange={handleChangeDescription}
          handleSave={handleSave}
          manufacturers={manufacturers}
          handleManufacturerSelect={handleManufacturerSelect}
          ref={reloadRef}
        />
      )}
      <Styles.ProductsWrapper>
        {subCategory &&
          subCategory.products &&
          subCategory.products.map(product => (
            <AdminProductCard
              key={product.id}
              product={product}
              handleDelete={handleDeleteProduct}/>
          ))}
      </Styles.ProductsWrapper>
    </AdminLayout>
  );
});
