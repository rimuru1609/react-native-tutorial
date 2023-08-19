import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type MainStackParamList = {
    Home: undefined;
    Search: undefined;
    Item: { fullname: string,email:string,password:string };
    Details: { index: number };
};

export type HomeScreenProps = NativeStackScreenProps<MainStackParamList, 'Home'>;
export type SearchScreenProps = NativeStackScreenProps<MainStackParamList, 'Search'>;
export type DetailScreenProps = NativeStackScreenProps<MainStackParamList, 'Details'>;
