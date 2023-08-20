import {NativeStackScreenProps} from '@react-navigation/native-stack';
// import {ID} from 'src/types/types';
export type DogPictureParamList = {
  Home : undefined;
  Search : undefined;
  DogDetail: {id: number};
};

export type HomeScreenProps = NativeStackScreenProps<DogPictureParamList, 'Home'>;
export type SearchScreenProps = NativeStackScreenProps<DogPictureParamList, 'Search'>;
export type DogDetailScreenProps = NativeStackScreenProps<DogPictureParamList, 'DogDetail'>;
