import styled from 'styled-components';

export const HomeContainer = styled.section`
    //display
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    //sizes
    height: 100vh;
    width: 100%;

    //font
    color: ${({theme}) => theme.Colors.Text100};
    font-size: ${({theme}) => theme.Sizes.EBig};
    text-transform: uppercase;

    //view
    background: ${({theme}) => theme.Colors.Background500};

`