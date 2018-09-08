import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/footer.jsx';
import AdditionalProductsByType from './components/AdditionalProductsByType.jsx';
import AdditionalProductsByProductLine from './components/AdditionalProductsByProductLine.jsx';
import DesignerThoughts from './components/DesignerThoughts.jsx';

const Index = () => {
  return (
    <div>
      <DesignerThoughts />
      {/*  ****** Since there was no linkage between this module and other modules on the site, both
      additional product views are not filtered. Both javascript and CSS files
      are nearly identical ******  */}
      <AdditionalProductsByProductLine />
      <AdditionalProductsByType />
      <Footer />
    </div>
  );
};

export default Index;

ReactDOM.render(<Index />, document.getElementById('app'));

