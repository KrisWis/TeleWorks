import './BlogPage.scss';
import '@/shared/main.scss';
import { useEffect } from 'react';
import { memo } from 'react';

export const BlogPage: React.FC = memo((): React.JSX.Element => {
  useEffect(() => {
    document.querySelector('html')!.classList.add('BlogPage');
  }, []);

  return (
      <main className='Page BlogPage__main'>
        <div className='padding'>
        </div>
      </main>
  );
});