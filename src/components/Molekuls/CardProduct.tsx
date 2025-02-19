import { BsCart } from "react-icons/bs";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export interface CardProps {
  id: number;
  brand: string;
  type: string;
  descriptions: string;
  price: number;
  image: string;
}

const CardProduct = ({
  brand,
  type,
  descriptions,
  price,
  image,
}: CardProps) => {
  return (
    <Card className="w-full md:max-w-[240px]">
      <CardHeader>
        <img
          src={`${image}`}
          alt=""
          className="block mb-4 object-contain w-[150px] h-[150px] mx-auto md:w-auto md:h-auto"
        />
        <CardTitle className="font-semibold text-lg">
          {brand} {type}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{descriptions.substring(0, 30)}...</CardDescription>
      </CardContent>
      <CardFooter className="font-semibold flex justify-between items-center">
        {price.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
        })}
        <Button type="button" size="icon">
          <BsCart />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CardProduct;
