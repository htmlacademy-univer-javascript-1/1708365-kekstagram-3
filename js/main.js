import './data.js';
import './render.js';
import './utils.js';

import './form.js';
import './form-validation.js';
import {createPosts} from './data.js';
import {renderThumbnails} from './render.js';

renderThumbnails(createPosts(25));
