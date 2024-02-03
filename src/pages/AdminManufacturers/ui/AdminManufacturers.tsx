import React, {useEffect, useState} from 'react';

import {IManufacturer} from "@/entities";
import {AdminLayout} from "@/shared/ui/Layouts";
import {Color} from "@/shared/constants";
import {Button, Minus, Plus} from "@/shared/ui";
import {useToken} from "@/shared/hooks";

import {getManufacturers, createManufacturer, deleteManufacturer} from "../api";
import {Editor} from "./Editor";

import * as Styles from './AdminManufacturers.styles';

export const AdminManufacturers = () => {
  const [token] = useToken();

  const [manufacturers, setManufacturers] = useState<IManufacturer[]>([]);
  const [isEditorOpen, setEditorOpen] = useState(false);
  const [name, setName] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      getManufacturers().then(res => {
        setManufacturers(res);
      })
    }
  }, [isLoading]);

  const handleNameChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  }

  const handleDeleteItem = (id: number) => {
    setLoading(true);

    deleteManufacturer(token, id)
      .then(() => {
        setLoading(false);
      });
  }

  const handleAddItem = () => {
    setLoading(true);

    if (!!name) {
      createManufacturer(token, name)
        .then(() => {
          setName('');
          setLoading(false);
      })
    }
  }

  if (isLoading) {
    return <>Loading</>
  }

  return (
    <AdminLayout>
      <Styles.EditorWrapper>
        <Button
          size={'S'}
          onClick={() => {
            setEditorOpen(prev => !prev)
          }}
        >
          {isEditorOpen ? <Minus /> : <Plus />}
        </Button>
        {isEditorOpen ? (
          <Editor
            nameInput={name}
            placeholder="Введите имя производителя"
            handleSave={handleAddItem}
            handleNameInputChange={handleNameChange}
          />
        ) : null}
      </Styles.EditorWrapper>

      <ul>
        <Styles.Label>
          Добавленные производители:
        </Styles.Label>
        {manufacturers.map(m => {
          return (
            <Styles.ItemListElement key={m.id}>
              <Styles.ItemWrapper>
                <Styles.Title>
                  {m.name}
                </Styles.Title>
                <Styles.DeleteIcon
                  color={Color.black}
                  width='30px'
                  height='30px'
                  onClick={() => {
                    handleDeleteItem(m.id)
                  }}/>
              </Styles.ItemWrapper>
            </Styles.ItemListElement>
          )
        })}
      </ul>
    </AdminLayout>
  );
};
