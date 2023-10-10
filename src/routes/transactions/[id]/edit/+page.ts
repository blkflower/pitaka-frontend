import { error } from "@sveltejs/kit";

export function load({ params }: { params: { id: string } }) {
	if (['1', '2', '3'].includes(params.id)) {
		return {
			content: `You are editing transaction ${params.id}`
		};
	}

	throw error(404, 'Not found');
}