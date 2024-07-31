import Helmet from "react-helmet";

interface CeoDataProps {
  title: string;
  description?: string;
}

export const CeoData = ({ title, description }: CeoDataProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
};
