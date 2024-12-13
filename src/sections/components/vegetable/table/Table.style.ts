import styled from '@emotion/styled'

export const CustomVegetableTable = {
    Container: styled.div`
        border: 1px solid rgba(0, 0, 0, 0.1);
    `,
    Header: styled.div`
        background-color: #e8e7e7;
        font-weight: bold;
        padding: 16px 24px;
        text-align: center;
    `,
    Body: styled.div`
        background-color: #ffffff;
        display: flex;
        flex-direction: column;
        align-items: center;

        > button {
            max-width: 90%;
            margin: 6px 0;
        }
    `,
}
