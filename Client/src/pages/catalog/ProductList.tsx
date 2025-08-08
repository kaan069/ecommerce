import { IProduct } from "../../model/IProduct";
import Product from "./Product";
import Grid from '@mui/material/GridLegacy';

interface Props {
    products: IProduct[];
}


export default function ProductList({ products }: Props) {

    return (
        <Grid container spacing={2}>

            {products.map((p: any) => (
                <Grid xs={12} md={4} lg={3} key={p.id} item>
                    <Product product={p} />
                </Grid>
            ))}

        </Grid>
    )
}