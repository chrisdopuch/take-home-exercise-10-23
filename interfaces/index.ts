export type Dependency = {
  id: number;
  name: string;
  status: Status;
};

export enum Status {
  Available = "Available",
  Progressing = "Progressing",
  Pending = "Pending",
  Succeeded = "Succeeded",
  Running = "Running",
  Failed = "Failed",
  Errored = "Errored",
  Degraded = "Degraded",
  Unknown = "Unknown",
}

export type Service = {
  id: number;
  name: string;
  // optional documentation fields
  owner?: string;
  sloDashboardUrl?: string;
  documentationUrl?: string;
  upstreamDependencies?: Dependency[];
  downstreamDependencies?: Dependency[];
  sourceControl: {
    repo: string;
    lastCommit: string;
    pipelineStatus: Status;
    pipelineUrl: string;
  };
  deployment: {
    id: number;
    name: string;
    status: Status;
    version: string;
    createdAt: string;
    updatedAt: string;
  };
  pods: {
    id: number;
    name: string;
    status: Status;
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
