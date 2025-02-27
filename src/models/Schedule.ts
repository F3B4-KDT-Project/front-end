export interface ScheduleData {
  title: string;
  startAt: string;
  endAt: string;
  locationName: string;
  locationId: string;
  latitude: number;
  longitude: number;
  members: { identificationCode: string }[];
}

// 응답 데이터 타입 정의
export interface CreateScheduleResponse {
  id: number;
  title: string;
  locationId: string;
  address: string;
  latitude: number;
  longitude: number;
  startAt: string;
  endAt: string;
  locationName: string;
  members: {
    memberId: number;
    nickname: string;
    profileImg: string;
  }[];
}
