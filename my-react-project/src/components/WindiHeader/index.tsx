import './index.css';
import packageJson from '~/package.json';

export function WindiHeader() {
  return (
    <div className='windi-header'>
      <span className='windi-header__title'>vite version: {packageJson.devDependencies.vite}</span>
    </div>
  );
}