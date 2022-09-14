import * as request from '~/utils/request';

export const search = async (keyw) => {
    try {
        const animelist = await request.get('search', {
            params: {
                keyw,
            },
        });
        return animelist;
    } catch (err) {
        console.error(err);
    }
};
