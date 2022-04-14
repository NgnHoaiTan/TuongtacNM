import {v2 as cloudinary} from 'cloudinary';

cloudinary.config({ 
    cloud_name: 'hoaitandev', 
    api_key: '492386953854148', 
    api_secret: 'ggR_UPh8EhfH66NXHunB3CmuN64',
    secure: true
});

export default cloudinary;