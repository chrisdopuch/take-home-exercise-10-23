export type Service = {
  id: number;
  name: string;
  // optional documentation fields
  owner?: string;
  sloDashboardUrl?: string;
  documentationUrl?: string;
  sourceControl: {
    repo: string;
    lastCommit: string;
    pipelineStatus: string;
    pipelineUrl: string;
  };
  deployment: {
    id: number;
    name: string;
    status: string;
    version: string;
    createdAt: string;
    updatedAt: string;
  };
  pods: {
    id: number;
    name: string;
    status: string;
    createdAt: string;
    updatedAt: string;
  }[];
};

export type OnCallEmployee = {
  id: number;
  name: string;
  email: string;
  phone: string;
  slack: string;
  isOnCall: boolean;
};
