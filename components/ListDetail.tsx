import * as React from "react";
import Link from "next/link";

import { ListItem } from "./ListItem";
import { Status, Dependency } from "../interfaces";
import ServiceDependencyGraph from "./ServiceDependencyGraph";

type ListDetailProps = {
  item: ListItem;
};

const statusEmojiMap: { [key in Status]: string } = {
  Available: "🟢",
  Succeeded: "🟢",
  Running: "🟢",
  Errored: "🔴",
  Failed: "🔴",
  Degraded: "🔴",
  Pending: "🟡",
  Progressing: "🟡",
  Unknown: "🟠",
};

const DependencyList = ({ dependencies }: { dependencies: Dependency[] }) => (
  <ul>
    {dependencies.map((dependency) => (
      <li key={dependency.id}>
        <p>id: {dependency.id}</p>
        <p>name: {dependency.name}</p>
        <p>
          status: {dependency.status} {statusEmojiMap[dependency.status]}
        </p>
        <Link href={`/services/${dependency.id}`}>View details</Link>
      </li>
    ))}
  </ul>);

/**
 *
 * Displays the details of a ListItem
 * Note: this component handles both Service and OnCallEmployee types
 * but in the future we may want to split these into separate components
 */
const ListDetail = ({ item }: ListDetailProps) => (
  <div>
    <h1>Detail for {item.name}</h1>
    <p>ID: {item.id}</p>

    {/* Note: each of these sections would be good candidates to split into separate components as it grows */}
    {"isOnCall" in item && (
      <section>
        <h2>On Call Contact Info</h2>
        <p>Current status: {item.isOnCall ? "on call 🟢" : "offline 🔴"}</p>
        <p>Phone: {item.phone}</p>
        <p>Email: {item.email}</p>
        <p>Slack: {item.slack}</p>
      </section>
    )}

    {"owner" in item && (
      <p>Owner: {item.owner}</p>
    )}

    {/** 
     * Note: Each service should have an SLO and metrics Dashboard, in Grafana or Datadog or similar
     * These should track critical metrics for the service, usually a good place to start is with Google's Golden Signals
     * Which are Latency, Traffic, Errors, and Saturation
     */}
    {"sloDashboardUrl" in item && (
      <p>SLO Dashboard: <a href={item.sloDashboardUrl}>{item.sloDashboardUrl}</a></p>
    )}

    {/**
     * Note: Each service should have a documentation site, usually a wiki or a Github repo
     * This should include information about the service, how to use it, how to deploy it, how to debug it, etc
     */}
    {"documentationUrl" in item && (
      <p>Documentation: <a href={item.documentationUrl}>{item.documentationUrl}</a></p>
    )}

    {"sourceControl" in item && (
      <section>
        <h2>Source Control</h2>
        <p>
          Repo url:{" "}
          <a href={item.sourceControl.repo}>{item.sourceControl.repo}</a>
        </p>
        <p>
          Last Commit:{" "}
          <a
            href={`${item.sourceControl.repo}/commit/${item.sourceControl.lastCommit}`}
          >
            {item.sourceControl.lastCommit}
          </a>
        </p>
        <p>
          Pipeline Status: {item.sourceControl.pipelineStatus}{" "}
          {statusEmojiMap[item.sourceControl.pipelineStatus]}
        </p>
        <p>
          Pipeline url:{" "}
          <a href={item.sourceControl.pipelineUrl}>
            {item.sourceControl.pipelineUrl}
          </a>
        </p>
      </section>
    )}

    {"upstreamDependencies" in item && (
      <ServiceDependencyGraph service={item} />
    )}

    {"upstreamDependencies" in item && item.upstreamDependencies.length > 0 && (
      <section>
        <h2>Upstream Dependencies</h2>
        <DependencyList dependencies={item.upstreamDependencies} />
      </section>
    )}

    {"downstreamDependencies" in item && item.downstreamDependencies.length > 0 && (
      <section>
        <h2>Downstream Dependencies</h2>
        <DependencyList dependencies={item.downstreamDependencies} />
      </section>
    )}

    {"deployment" in item && (
      <section>
        <h2>Deployment</h2>
        <p>id: {item.deployment.id}</p>
        <p>name: {item.deployment.name}</p>
        <p>
          status: {item.deployment.status}{" "}
          {statusEmojiMap[item.deployment.status]}
        </p>
        <p>version: {item.deployment.version}</p>
        <p>createdAt: {item.deployment.createdAt}</p>
        <p>updatedAt: {item.deployment.updatedAt}</p>
      </section>
    )}

    {"pods" in item && (
      <section>
        <h2>Pods</h2>
        <ul>
          {item.pods.map((pod) => (
            <li key={pod.id}>
              <p>id: {pod.id}</p>
              <p>name: {pod.name}</p>
              <p>
                status: {pod.status} {statusEmojiMap[pod.status]}
              </p>
              <p>createdAt: {pod.createdAt}</p>
              <p>updatedAt: {pod.updatedAt}</p>
            </li>
          ))}
        </ul>
      </section>
    )}
  </div>
);

export default ListDetail;
