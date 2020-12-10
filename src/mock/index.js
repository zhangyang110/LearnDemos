import Mock from 'mockjs';
import guan from './guan.js';
Mock.mock(/api\/site\/his\/home/,guan.home);
Mock.mock(/api\/site\/his\/getAllCard/,guan.getAllCard);
export default Mock;