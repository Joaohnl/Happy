import Image from '../models/Image';

export default { 
    render(image: Image) {
        return {
            id: image.id,
            url: `${window.location.origin.toString()}/uploads/${image.path}`
        };
    },

    renderMany(images: Image[]) {
        return images.map(image => this.render(image));
    }
}