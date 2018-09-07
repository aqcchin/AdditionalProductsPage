import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/footer.jsx';

const Index = () => {
  return (
    <div>
      <Footer />
    </div>
  );
};

export default Index;

ReactDOM.render(<Index />, document.getElementById('app'));

