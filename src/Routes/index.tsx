import { memo } from 'react';

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import Home from 'pages/Home';
import SubmitConfirmation from 'pages/SubmitConfirmation';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/obrigado" element={<SubmitConfirmation />} />
      </Switch>
    </BrowserRouter>
  );
};

export default memo(Routes);
