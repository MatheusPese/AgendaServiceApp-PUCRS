import { ReactNode, useState } from "react";
import FloatingMenu from "@/app/_components/Globals/FloatingMenu";
import Button from "./Button";

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
  const [menuVisible, setMenuVisible] = useState(false);
  
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  
  
  return (
    <main className="page-container page-gradient">
      <div className={`page-header ${classesHeader}`}>{Header}</div>
      <div className={`page-body bg-black/[0.2] w-full ${classesBody}`}>
        {Body}
        {menuVisible && <FloatingMenu />}
      </div>
      <div className={`page-footer ${classesFooter}`}>{Footer}
      
    <div className="p-2 flex w-full justify-between gap-3">
      <Button customStyle="transparent" buttonText = "Menu" onClick={toggleMenu}/>
    </div>
    
      
      </div>
    </main>
  );
};

export default PageTemplate;
