import { Service, OnCallEmployee, Status } from "../interfaces";

/**
 * Dummy Service data.
 * 
 * Tries to vaguely resemble what you would get from a `kubectl get services` command.
 * and the pods and deployment data that would be returned from a `kubectl get pods` command.
 * 
 * There are other additional pieces of metadata that are also added, such as owner, documentation, etc.
 * Those would need to be fetched from other sources, such as a database or a config file.
 * 
 * Service connection mapping is also challenging to do in a real-world application.
 * You could track that information via K8s labels, but that would require a decent amount of manual work.
 * Alternatively, you could use a service mesh like Istio, though it would require a lot of setup.
 **/
export const sampleServiceData: Service[] = [
  {
    id: 101,
    name: "Service ABC",
    owner: "Team A",
    sloDashboardUrl: "https://slo-dashboard.com",
    documentationUrl: "https://docs.com",
    upstreamDependencies: [{ id: 102, name: "Service DEF", status: Status.Progressing }],
    downstreamDependencies: [{ id: 103, name: "Service GHI", status: Status.Available }, { id: 104, name: "Service JKL", status: Status.Degraded }],
    sourceControl: {
      repo: "https://github.com/chrisdopuch/take-home-exercise-10-23",
      lastCommit: "f0a2f27b18423f7e0a7750ab4be14dd6907d194b",
      pipelineStatus: Status.Succeeded,
      pipelineUrl:
        "https://github.com/chrisdopuch/take-home-exercise-10-23/actions/runs/123456789",
    },
    deployment: {
      name: "deployment-abc",
      id: 101,
      status: Status.Available,
      version: "1.0.0",
      createdAt: "Tue, 01 Oct 2023 10:00:00 +0000",
      updatedAt: "Tue, 01 Oct 2023 12:00:00 +0000",
    },
    pods: [
      {
        id: 101,
        name: "pod-abc-1",
        status: Status.Running,
        createdAt: "Tue, 01 Oct 2023 10:00:00 +0000",
        updatedAt: "Tue, 01 Oct 2023 12:00:00 +0000",
      },
      {
        id: 102,
        name: "pod-abc-2",
        status: Status.Running,
        createdAt: "Tue, 01 Oct 2023 10:00:00 +0000",
        updatedAt: "Tue, 01 Oct 2023 12:00:00 +0000",
      },
    ],
  },
  {
    id: 102,
    name: "Service DEF",
    owner: "Team A",
    sloDashboardUrl: "https://slo-dashboard.com",
    documentationUrl: "https://docs.com",
    upstreamDependencies: [],
    downstreamDependencies: [{ id: 101, name: "Service ABC", status: Status.Available }],
    sourceControl: {
      repo: "https://github.com/chrisdopuch/take-home-exercise-10-23",
      lastCommit: "f0a2f27b18423f7e0a7750ab4be14dd6907d194b",
      pipelineStatus: Status.Failed,
      pipelineUrl:
        "https://github.com/chrisdopuch/take-home-exercise-10-23/actions/runs/123456789",
    },
    deployment: {
      name: "deployment-def",
      id: 102,
      status: Status.Progressing,
      version: "1.0.0",
      createdAt: "Tue, 01 Oct 2023 10:00:00 +0000",
      updatedAt: "Tue, 01 Oct 2023 12:00:00 +0000",
    },
    pods: [
      {
        id: 103,
        name: "pod-def-1",
        status: Status.Pending,
        createdAt: "Tue, 01 Oct 2023 10:00:00 +0000",
        updatedAt: "Tue, 01 Oct 2023 12:00:00 +0000",
      },
      {
        id: 104,
        name: "pod-def-2",
        status: Status.Pending,
        createdAt: "Tue, 01 Oct 2023 10:00:00 +0000",
        updatedAt: "Tue, 01 Oct 2023 12:00:00 +0000",
      },
    ],
  },
  {
    id: 103,
    name: "Service GHI",
    owner: "Team B",
    sloDashboardUrl: "https://slo-dashboard.com",
    documentationUrl: "https://docs.com",
    upstreamDependencies: [{ id: 101, name: "Service ABC", status: Status.Available }],
    downstreamDependencies: [],
    sourceControl: {
      repo: "https://github.com/chrisdopuch/take-home-exercise-10-23",
      lastCommit: "f0a2f27b18423f7e0a7750ab4be14dd6907d194b",
      pipelineStatus: Status.Failed,
      pipelineUrl:
        "https://github.com/chrisdopuch/take-home-exercise-10-23/actions/runs/123456789",
    },
    deployment: {
      name: "deployment-ghi",
      id: 103,
      status: Status.Available,
      version: "1.0.0",
      createdAt: "Tue, 01 Oct 2023 10:00:00 +0000",
      updatedAt: "Tue, 01 Oct 2023 12:00:00 +0000",
    },
    pods: [
      {
        id: 105,
        name: "pod-ghi-1",
        status: Status.Running,
        createdAt: "Tue, 01 Oct 2023 10:00:00 +0000",
        updatedAt: "Tue, 01 Oct 2023 12:00:00 +0000",
      },
      {
        id: 106,
        name: "pod-ghi-2",
        status: Status.Running,
        createdAt: "Tue, 01 Oct 2023 10:00:00 +0000",
        updatedAt: "Tue, 01 Oct 2023 12:00:00 +0000",
      },
    ],
  },
  {
    id: 104,
    name: "Service JKL",
    owner: "Team B",
    sloDashboardUrl: "https://slo-dashboard.com",
    documentationUrl: "https://docs.com",
    upstreamDependencies: [{ id: 101, name: "Service ABC", status: Status.Available }],
    downstreamDependencies: [],
    sourceControl: {
      repo: "https://github.com/chrisdopuch/take-home-exercise-10-23",
      lastCommit: "f0a2f27b18423f7e0a7750ab4be14dd6907d194b",
      pipelineStatus: Status.Failed,
      pipelineUrl:
        "https://github.com/chrisdopuch/take-home-exercise-10-23/actions/runs/123456789",
    },
    deployment: {
      name: "deployment-jkl",
      id: 104,
      status: Status.Degraded,
      version: "1.0.0",
      createdAt: "Tue, 01 Oct 2023 10:00:00 +0000",
      updatedAt: "Tue, 01 Oct 2023 12:00:00 +0000",
    },
    pods: [
      {
        id: 107,
        name: "pod-abc-1",
        status: Status.Errored,
        createdAt: "Tue, 01 Oct 2023 10:00:00 +0000",
        updatedAt: "Tue, 01 Oct 2023 12:00:00 +0000",
      },
      {
        id: 108,
        name: "pod-abc-2",
        status: Status.Errored,
        createdAt: "Tue, 01 Oct 2023 10:00:00 +0000",
        updatedAt: "Tue, 01 Oct 2023 12:00:00 +0000",
      },
    ],
  },
];

/**
 * Dummy OnCallEmployee data.
 * This would probably be pulled from the API of your on-call scheduling tool, such as PagerDuty.
 * 
 * For the purposes of this exercise, we assume there's just one on-call employee.
 * But in reality, there would likely be one on-call employee per team.
 * We could use the owner field in the Service data to determine which on-call employee to display, in that case.
 **/
export const sampleOnCallEmployeeData: OnCallEmployee[] = [
  {
    id: 101,
    name: "John Doe",
    email: "john.doe@company.com",
    phone: "555-555-5555",
    slack: "@johndoe",
    isOnCall: true,
  },
  {
    id: 102,
    name: "Jane Doe",
    email: "jane.doe@company.com",
    phone: "555-555-5555",
    slack: "@janedoe",
    isOnCall: false,
  },
  {
    id: 103,
    name: "John Smith",
    email: "john.smith@company.com",
    phone: "555-555-5555",
    slack: "@johnsmith",
    isOnCall: false,
  },
];
