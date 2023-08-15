import {NativeStackScreenProps} from '@react-navigation/native-stack';
// import {ID} from 'src/types/types';
type AuthenStackParamList = {
  SiginOtp: undefined;
  SiginOtpVerified: {phoneNumber: string};
  SiginByPassword: undefined;
  Sigin: undefined;
  SiginUp: undefined;
  ResetPassword: undefined;
  ChangePassword: {phoneNumber: string};
};

type MainStackParamList = {
  Home: undefined;
  Message: undefined;
  DetailMessage: {doctorId: ID};
  Agenda: undefined;
  SelectDate: undefined;
  SelectDoctor: undefined;
  DetailDoctor: undefined;
  ReviewAppointment: undefined;
  MedicalBook: undefined;
  DetailBook: {MedicalBookId?: ID};
  DetailHistory: undefined;
  Profile: undefined;
  Language: undefined;
  ChangePassword: {phoneNumber: string};
  Error: {codeError: number};
};
export type SignInScreenProp = NativeStackScreenProps<
  RootStackParamList,
  'Sigin'
>;
export type SiginOtpProp = NativeStackScreenProps<
  RootStackParamList,
  'SiginOtp'
>;
export type SiginOtpVerificationProp = NativeStackScreenProps<
  RootStackParamList,
  'SiginOtpVerified'
>;

export type DetailMessageProp = NativeStackScreenProps<
  RootStackParamList,
  'DetailMessage'
>;
export type ErrorProp = NativeStackScreenProps<RootStackParamList, 'Error'>;
export type ChangePasswordProp = NativeStackScreenProps<
  RootStackParamList,
  'ChangePassword'
>;

export type AuthenScreenProp = NativeStackScreenProps<AuthenStackParamList>;
export type MainScreenProp = NativeStackScreenProps<MainStackParamList>;
export type RootStackParamList = AuthenStackParamList & MainStackParamList & {};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
    interface MainScreenProps extends MainScreenProp {}
  }
}
