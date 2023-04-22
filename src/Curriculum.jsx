import { Button } from 'react-bootstrap';

export const Curriculum = () => {

    const ClickButton = () => {
        alert('Aqui se esta oprimiendo el botón')
    }

    return (
        <>
            <div className='row'>
                <div className='col-6'>
                    <Button as="a" variant="primary" onClick={ClickButton}>
                        Button as link
                    </Button>
                </div>
                <div className='col-6'>
                    <Button as="a" variant="primary">
                        Button as link
                    </Button>
                </div>
            </div>
        </>
    )
}
