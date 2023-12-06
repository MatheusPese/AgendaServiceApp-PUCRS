import { ReactNode } from 'react';
import Button from './button'

interface PageTemplateProps {
  children: {
    Top?: ReactNode;
    Middle?: ReactNode;
    Bottom?: ReactNode;
  };

}
const PageTemplate: React.FC<PageTemplateProps> = ({ children }) => {
  const { Top, Middle, Bottom } = children;
  return (
    <main className="bg-gradient-to-bl from-blue-400 via-teal-600 to-teal-300 flex min-h-screen flex-col items-center justify-between">
      <div className="flex top-0 w-full h-30 bg-transparent text-white p-4 ">
        {Top}
      </div>
      <div className='flex-1 w-full bg-gray-900 opacity-50 text-white p-4'>
        {Middle}
      </div>
      <div className="flex bottom-0 w-full bg-transparent text-white p-4 justify-between items-center">
        {Bottom}
      </div>
    </main>
  )
}

export default PageTemplate;


