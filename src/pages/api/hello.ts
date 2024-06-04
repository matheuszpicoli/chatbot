import type { NextApiRequest, NextApiResponse } from "next"

type ResponseData = {
	message: string
}

export default function handler(
	request: NextApiRequest,
	response: NextApiResponse<ResponseData>
) {
	response.status(200).json({
		message: "Hello from Next.js!"
	})
}
