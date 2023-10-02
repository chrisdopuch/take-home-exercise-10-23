import { Service } from '../interfaces'

/**
 * Dummy Service data.
 * Tries to vaguely resemble what you would get from a `kubectl get services` command.
 * and the pods and deployment data that would be returned from a `kubectl get pods` command.
 **/
export const sampleServiceData: Service[] = [
  { id: 101,
    name: 'Service ABC',
    deployment: {
      name: 'deployment-abc',
      id: 101,
      status: 'Available',
      version: '1.0.0',
      createdAt: 'Tue, 01 Oct 2023 10:00:00 +0000',
      updatedAt: 'Tue, 01 Oct 2023 12:00:00 +0000',
    },
    pods: [
      {
        id: 101,
        name: 'pod-abc-1',
        status: 'Running',
        createdAt: 'Tue, 01 Oct 2023 10:00:00 +0000',
        updatedAt: 'Tue, 01 Oct 2023 12:00:00 +0000',
      },
      {
        id: 102,
        name: 'pod-abc-2',
        status: 'Running',
        createdAt: 'Tue, 01 Oct 2023 10:00:00 +0000',
        updatedAt: 'Tue, 01 Oct 2023 12:00:00 +0000',
      }
    ]
  },
  { id: 102, 
    name: 'Service DEF',
    deployment: {
      name: 'deployment-def',
      id: 102,
      status: 'Progressing',
      version: '1.0.0',
      createdAt: 'Tue, 01 Oct 2023 10:00:00 +0000',
      updatedAt: 'Tue, 01 Oct 2023 12:00:00 +0000',
    },
    pods: [
      {
        id: 103,
        name: 'pod-def-1',
        status: 'Pending',
        createdAt: 'Tue, 01 Oct 2023 10:00:00 +0000',
        updatedAt: 'Tue, 01 Oct 2023 12:00:00 +0000',
      },
      {
        id: 104,
        name: 'pod-def-2',
        status: 'Pending',
        createdAt: 'Tue, 01 Oct 2023 10:00:00 +0000',
        updatedAt: 'Tue, 01 Oct 2023 12:00:00 +0000',
      }
    ]
  },
  { id: 103, 
    name: 'Service GHI',
    deployment: {
      name: 'deployment-ghi',
      id: 103,
      status: 'Available',
      version: '1.0.0',
      createdAt: 'Tue, 01 Oct 2023 10:00:00 +0000',
      updatedAt: 'Tue, 01 Oct 2023 12:00:00 +0000',
    },
    pods: [
      {
        id: 105,
        name: 'pod-ghi-1',
        status: 'Running',
        createdAt: 'Tue, 01 Oct 2023 10:00:00 +0000',
        updatedAt: 'Tue, 01 Oct 2023 12:00:00 +0000',
      },
      {
        id: 106,
        name: 'pod-ghi-2',
        status: 'Running',
        createdAt: 'Tue, 01 Oct 2023 10:00:00 +0000',
        updatedAt: 'Tue, 01 Oct 2023 12:00:00 +0000',
      }
    ]
  },
  { id: 104, 
    name: 'Service JKL',
    deployment: {
      name: 'deployment-jkl',
      id: 104,
      status: 'Available',
      version: '1.0.0',
      createdAt: 'Tue, 01 Oct 2023 10:00:00 +0000',
      updatedAt: 'Tue, 01 Oct 2023 12:00:00 +0000',
    },
    pods: [
      {
        id: 107,
        name: 'pod-abc-1',
        status: 'Running',
        createdAt: 'Tue, 01 Oct 2023 10:00:00 +0000',
        updatedAt: 'Tue, 01 Oct 2023 12:00:00 +0000',
      },
      {
        id: 108,
        name: 'pod-abc-2',
        status: 'Running',
        createdAt: 'Tue, 01 Oct 2023 10:00:00 +0000',
        updatedAt: 'Tue, 01 Oct 2023 12:00:00 +0000',
      }
    ]
  },
]
