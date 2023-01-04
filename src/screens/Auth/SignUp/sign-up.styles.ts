import styled from 'styled-components/native';

import { RFPercentage,RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
    flex: 1;
    align-items: center;
    
`;

export const TextButton = styled.Text`
    color: #FFF;
    font-size: 17px;
    font-weight: 500;
`;

export const AccountText = styled.Text`
    color: #B0B0B0;
    margin: 15px 0 8px 0;
`;
export const CreateAccountText = styled.Text`
    margin: 15px 0;
    color: #FBB03F95;
`;

export const CreateAccount = styled.TouchableOpacity``;

export const submitText = styled.Text`
    color: #B0B0B0;
`;
export const changePassword = styled.TouchableOpacity`
    margin: 20px 0;
    align-self: flex-end;
`;

export const Image = styled.Image`
    width: 200px;
    height: 200px;
    margin-top: 70px;
`;

export const Loading = styled.Image`
    width: 10px;
    height: 10px;
`;

export const Input = styled.TextInput`
    background: transparent;
    color: #FFF;
    padding: 13px 16px;
    border: solid 1px #FFF;
    margin-bottom: 16px;
    border-radius: 4px;
`;

export const ContainerInput = styled.View`
    flex: 1;
    width: 100%;
    padding: 10% 8%;
`;

export const ButtonInput = styled.TouchableOpacity`
    background-color: #0C64BB;
    box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
    padding: 12px 0;
    margin-top: 20px;
    justify-content: center;
    align-items: center;
`;

export const ButtonAccess = styled.TouchableOpacity`
    align-self: center;
`

export const TextQuestAccess = styled.Text`
    color: #BDBDBD;
    text-align: center;
    margin-top: 15px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`
export const TextAccess = styled.Text`
    color: #FFF;
    font-weight: 600;
    margin-left: 7px;
`

export const CreateAccountSocial = styled.TouchableOpacity`
    background: #DADADA;
    padding: 16px;
    margin-bottom: 24px;
    border-radius: 4px;
    flex-direction: row;
    align-items: center;
    position: relative;
    justify-content: center;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
`
export const CreateAccountTextSocial = styled.Text`
    text-align: center;
    color: #333;
    font-weight: 500;
`

export const TextOr = styled.Text`
    font-size: ${RFValue(16)}px;
    color: #BDBDBD;
    align-items: center;
    align-self: center;
   margin-bottom: 24px;
`;