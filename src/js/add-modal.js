import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';
import { defaults, alert } from '@pnotify/core';

defaults.styling = 'material';
defaults.icons = 'material';

const addAdvForm = document.querySelector('.add-modal');

const handleNewAdv = event => {
  const { target } = event;

  if (!target.classList.contains('.add-modal-button')) return;

  console.log(target);
};


