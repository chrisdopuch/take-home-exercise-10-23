import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import { useRouter } from "next/router";

import { Service, Status } from "../interfaces";

type Props = {
  service: Service;
};

// Sets the colors of the nodes based on their status
const getColorByStatus = (status: keyof typeof Status) => {
  switch (status) {
    case "Available":
      return "green";
    case "Succeeded":
      return "green";
    case "Running":
      return "green";
    case "Degraded":
      return "red";
    case "Pending":
      return "yellow";
    case "Progressing":
      return "yellow";
    case "Errored":
      return "red";
    case "Failed":
      return "red";
    case "Unknown":
      return "orange";
    default:
      return "gray";
  }
};

/**
 * Component for displaying a service dependency graph between services
 */
const ServiceDependencyGraph = ({ service }: Props) => {
  const svgRef = useRef(null);
  const router = useRouter();

  // Handle clicking on a node to navigate to the service detail page
  const handleCircleClick = (data) => {
    const { id } = data;
    router.push(`/services/${id}`);
  };

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    // Define service dependency data
    const nodes = [
      {
        id: service.id,
        name: service.name,
        status: service.deployment.status,
      },
    ].concat(
      service.upstreamDependencies.concat(service.downstreamDependencies),
    );
    const links = service.upstreamDependencies
      .map((dependency) => {
        return {
          source: dependency.id,
          target: service.id,
          label: "Upstream",
        };
      })
      .concat(
        service.downstreamDependencies.map((dependency) => {
          return {
            source: service.id,
            target: dependency.id,
            label: "Downstream",
          };
        }),
      );

    // Create a force simulation
    const simulation = d3
      .forceSimulation(nodes)
      .force(
        "link",
        d3
          .forceLink(links)
          .id((d) => d.id)
          .distance(100),
      )
      .force("charge", d3.forceManyBody().strength(-400))
      .force("center", d3.forceCenter(400, 200));

    // Create links
    const link = svg
      .selectAll(".link")
      .data(links)
      .enter()
      .append("line")
      .attr("class", "link")
      .style("stroke", "#ccc");

    // Create nodes
    const node = svg
      .selectAll(".node")
      .data(nodes)
      .enter()
      .append("g")
      .attr("class", "node");

    // Add circles representing services
    node
      .append("circle")
      .attr("r", 20)
      .attr("fill", (d) => getColorByStatus(d.status))
      .on("click", (_event, d) => handleCircleClick(d))
      .style("cursor", "pointer");

    // Add labels for nodes
    node
      .append("text")
      .text((d) => d.name)
      .style("font-size", "12px")
      .attr("dy", -25)
      .attr("text-anchor", "middle");

    // Create tick function for simulation
    const ticked = () => {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y);

      node.attr("transform", (d) => `translate(${d.x},${d.y})`);
    };

    // Update simulation on each tick
    simulation.on("tick", ticked);

    return () => {
      // Clean up simulation on unmount
      simulation.stop();
      // Remove all d3 svg elements - this is a little hacky, but it works
      svg.selectAll("*").remove();
    };
  }, [service, svgRef, handleCircleClick]);

  return (
    <div>
      <h2>Service Dependency Graph</h2>
      <svg ref={svgRef} width="800" height="400"></svg>
    </div>
  );
};

export default ServiceDependencyGraph;
