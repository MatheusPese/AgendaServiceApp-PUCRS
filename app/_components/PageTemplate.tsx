import { ReactNode } from 'react';
import './PageTemplate.css';

interface PageTemplateProps {
  children: {
    Top?: ReactNode;
    Middle?: ReactNode;
    Bottom?: ReactNode;
  };
}

const PageTemplate: React.FC<PageTemplateProps> = ({ children: { Top, Middle, Bottom } }) => {
  const scrollBar = "scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-100 overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full "

  return (
    <main className="main-container page-gradient" >
      <div className="top-container">
        {Top}
      </div>
      <div className={`middle-container translucent-background ${scrollBar}`} >
        {Middle}
      </div>
      <div className="bottom-container">
        {Bottom}
      </div>
    </main>
  )
}

export default PageTemplate;


