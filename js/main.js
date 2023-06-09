import './render.js';
import './util.js';
import './form.js';
import './form-validation.js';
import './scaling.js';
import './effect.js';

import { showDownAlert } from './fail.js';
import { renderThumbnails } from './render.js';
import { getDescription } from './data.js';

getDescription(renderThumbnails, showDownAlert);
