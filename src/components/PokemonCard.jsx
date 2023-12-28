import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';

const PokemonCard = ({ name }) => (
    <Card
        title={name}
        cover={<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png' alt='Ditto' />}
        extra={<StarOutlined />}
    >
        <Meta description='normal' />
    </Card>
);

export { PokemonCard };