import apiService from './services';

interface ResponseTypes {
  message: string;
  code: number;
}

export interface FirstResponse extends ResponseTypes {
  depth: number;
  description: string;
}

export interface SecondResponse extends ResponseTypes {
  depth: number;
  description: string;
}

export interface ThirdResponse extends ResponseTypes {
  depth: number;
  description: string;
}

export interface FourthResponse extends ResponseTypes {
  depth: number;
  description: string;
}

const getFirst = async () => {
  const response = await apiService.get<FirstResponse>('/first');
  return response.data;
};

const getSecond = async (depth: number) => {
  const response = await apiService.get<SecondResponse>(`/second?depth=${depth}`);
  return response.data;
};

const getThird = async (depth: number) => {
  const response = await apiService.get<ThirdResponse>(`/third?depth=${depth}`);
  return response.data;
};

const getFourth = async (depth: number) => {
  const response = await apiService.get<FourthResponse>(`/fourth?depth=${depth}`);
  return response.data;
};

export { getFirst, getSecond, getThird, getFourth };
