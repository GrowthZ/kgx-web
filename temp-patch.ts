import { servicesService } from './src/services/servicesService';
import { SERVICES_DATA } from './services';

async function patch() {
    const slugs = ['thiet-ke-canh-quan-san-vuon', 'nuoi-cay-mo-cong-nghe-cao'];
    for (const slug of slugs) {
        console.log(`Checking ${slug}...`);
        const existing = await servicesService.getServiceBySlug(slug);
        const img = SERVICES_DATA[slug]?.hero?.image;
        if (existing && img) {
            await servicesService.updateService(existing.id!, { image: img, images: [img] });
            console.log(`Successfully patched ${slug} with image ${img}`);
        } else {
            console.log(`Could not patch ${slug}. Existing: ${!!existing}, Img: ${!!img}`);
        }
    }
    process.exit(0);
}

patch().catch(e => {
    console.error(e);
    process.exit(1);
});
