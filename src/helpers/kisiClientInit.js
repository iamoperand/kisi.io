import Kisi from 'kisi-client';

import constants from '../config/constants';


const { LOGIN_SECRET } = constants;

const kisiClient = new Kisi();

kisiClient.setLoginSecret(LOGIN_SECRET);


export default kisiClient;
