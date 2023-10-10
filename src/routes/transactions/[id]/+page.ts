import { error } from "@sveltejs/kit";

export function load({ params }: { params: { id: string } }) {
	if (['1', '2', '3'].includes(params.id)) {
		return {
			id: params.id,
			content: `You are viewing transaction ${params.id}`
		};
	}

	throw error(404, 'Not found');
}