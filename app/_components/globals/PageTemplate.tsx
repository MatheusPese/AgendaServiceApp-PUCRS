import { ReactNode } from "react";

interface PageTemplateProps {
  children: {
    Header?: ReactNode;
    Body?: ReactNode;
    Footer?: ReactNode;
  };
  classesHeader?: string;
  classesBody?: string;
  classesFooter?: string;
}

const PageTemplate: React.FC<PageTemplateProps> = ({
  children: { Header, Body, Footer },
  classesHeader,
  classesBody,
  classesFooter,
}) => {
  return (
    <main className="page-container page-gradient">
      <div className={`page-header ${classesHeader}`}>{Header}</div>
      <div className={`page-body bg-black/[0.2] w-full ${classesBody}`}>{Body}</div>
      <div className={`page-footer ${classesFooter}`}>{Footer}</div>
    </main>
  );
};

export default PageTemplate;
