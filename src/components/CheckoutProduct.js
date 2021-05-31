import {StarIcon} from "@heroicons/react/solid";
import Image from "next/image";

function CheckoutProduct({
	id,
	title,
	price,
	rating,
	description,
	category,
	image,
	hasPrime,
}) {
	return (
		<div className="grid grid-cols-5">
			{/* left section */}
			<Image src={image} height={200} width={200} objectFit="contain" />

			{/* middle section */}
			<div className="col-span-3 mx-5">
				<p>{title}</p>
				<div className="flex">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<StarIcon key={i} className="h-5 text-yellow-500" />
						))}
				</div>
			</div>

			{/* right section */}
		</div>
	);
}

export default CheckoutProduct;
