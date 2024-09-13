import clsx from 'clsx';

import Icon from '@components/ui/icon';
import Link from '@components/ui/link';
import Image from '@components/ui/image';
import Button from '@components/ui/button';
import { Card, CardContent } from '@components/ui/card';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger
} from '@components/forms/select';
import Typography from '@components/ui/typography';
import Box from '@components/layouts/box';

export default function CartCard({ id, image, name, price, quantity }) {
  return (
    <Card className="flex flex-row items-center p-4">
      <div className="w-1/3">
        <Link href="/product">
          <Image
            src={image}
            alt={name}
            width={150}
            height={150}
            className="object-cover"
          />
        </Link>
      </div>

      <CardContent className="w-2/3 flex flex-col justify-between">
        <div>
          <p className="text-sm font-bold mb-2">
            <Link
              href={`/shop/${name}`}
              className={clsx(
                "text-sm leading-5 font-medium",
                "uppercase",
                "text-primary",
              )}
            >
              {name}
            </Link>

            <br />

            <Box
              className={clsx(
                "flex gap-x-2 items-center",
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
          </p>
        </div>

        <div className="flex items-center">
          <Select defaultValue={quantity}>
            <SelectTrigger className="w-auto" textValue="1" />

            <SelectContent>
              <SelectItem value="1">1</SelectItem>
              <SelectItem value="2">2</SelectItem>
              <SelectItem value="3">3</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="text" size="sm" className="ml-auto text-gray-400">
            <Icon name="Trash2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
