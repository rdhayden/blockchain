import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { API_BASE_URL } from '../config';
import Block from './Block';

const PAGE_RANGE = 3;

function Blockchain() {
    const [blockchain, setBlockchain] = useState([]);
    const [blockchainLength, setblockchainLength ] = useState(0);

    const fetchBlockchainPage = ({start, end}) => {
        fetch(`${API_BASE_URL}/blockchain/range?start=${start}&end=${end}`)
            .then(response => response.json())
            .then(json => setBlockchain(json));
    }

    useEffect(() => {
        fetchBlockchainPage({ start: 0, end: PAGE_RANGE });

        fetch(`${API_BASE_URL}/blockchain/length`)
            .then(response => response.json())
            .then(json => setblockchainLength(json));
    }, []);

    const buttonNumbers = []
    for (let i=0; i<blockchainLength/PAGE_RANGE; i++){
        buttonNumbers.push(i);
    }

    return (
        <div className="Blockchain">
            <h3>Blockchain</h3>
            <div>
                {
                    blockchain.map( block => <Block key={block.hash} block={block} />)
                }
            </div>
            <div>
                {
                    buttonNumbers.map(number => {
                        const start = number * PAGE_RANGE;
                        const end = (number + 1) * PAGE_RANGE;

                        return (
                            //<span key={number} onClick={fetchBlockchainPage({ start, end })}>
                            //the above passes the result of the function call fetchBlockchainPage({ start, end })
                            //to onClick, but onClick needs a callback function, so wrap it in an anonymous function
                            <span key={number} onClick={() => fetchBlockchainPage({ start, end })}>
                                <Button size="sm" variant="danger">
                                    {number + 1}
                                </Button>{' '}
                            </span>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Blockchain;