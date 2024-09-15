import clsx from 'clsx';

import Typography from '@components/ui/typography';
import Icon from '@components/ui/icon';
import Button from '@components/ui/button';
import Image from '@components/ui/image';
import { Card, CardContent } from '@components/ui/card';

import Box from '@components/layouts/box';

export default function WishlistCard({
  id,
  image,
  name,
  price,
  addToCart,
  removeFromWishlist
}) {
  return (
    <Card className="flex flex-row gap-4 sm:gap-8 items-center">
      <Box className="flex-shrink-0">
        <Image
          src={image}
          alt={name}
          className="w-32 h-32 object-cover"
        />
      </Box>

      <CardContent className="flex flex-1 flex-col justify-between">
        <Typography
          type="h6"
          className={clsx(
            "mb-1.5",
            "leading-5 font-medium",
            "uppercase",
            "text-primary",
          )}
        >
          {name}
        </Typography>

        <Box
          className={clsx(
            "flex gap-x-2 items-center",
            "mb-4"
          )}
        >
          <Typography
            className={clsx(
              "font-serif",
              "text-base font-semibold uppercase",
              "text-foreground",
            )}
          >
            TK.{price - (price * 45 / 100).toFixed(2)}
          </Typography>

          <Typography
            className={clsx(
              "font-serif text-base font-semibold",
              "uppercase line-through",
              "text-foreground/50",
            )}
          >
            {price.toFixed(2)}
          </Typography>
        </Box>

        <Box className="flex items-center gap-2">
          <Button
            size="xs"
            onClick={() => {
              addToCart({ id, image, name, price })
              removeFromWishlist({ id, image, name, price })
            }}
            rounded
          >
            <Icon name="ShoppingBag" />
            Add to Cart
          </Button>

          <Button
            size="xs"
            variant="text"
            iconOnly
            onClick={() => removeFromWishlist({ id, image, name, price })}
            className="ml-auto text-gray-400"
          >
            <Icon name="Trash2" />
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
