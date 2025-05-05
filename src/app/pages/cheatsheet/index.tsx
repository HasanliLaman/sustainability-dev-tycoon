import Container from "../../../components/container";
import StyleCheatsheet from "./style";

const Cheatsheet = () => {
  return (
    <StyleCheatsheet>
      <Container header="Cheatsheet" homeIcon={true} backIcon={false}>
        <article>
          <div>
            <h3>Sustainability Dimensions</h3>
            <p>
              Sustainability Dev Tycoon uses five key sustainability dimensions
              to guide your decisions. Understanding these will help you
              prioritize what matters most for your software project:
            </p>
            <ul>
              <li>
                Individual Sustainability focuses on supporting personal
                well-being, autonomy, and empowerment. It ensures the software
                enhances users’ health, productivity, and quality of life.
              </li>
              <li>
                Social Sustainability aims to promote social equity,
                inclusivity, and community engagement. It ensures the software
                fosters positive social interactions and fair access for diverse
                groups.
              </li>
              <li>
                Economic Sustainability is about maintaining financial viability
                and resource efficiency, ensuring that software supports
                economic growth, cost-effectiveness, and market competitiveness.
              </li>
              <li>
                Environmental Sustainability emphasizes minimizing the
                ecological footprint of software. It encourages energy-efficient
                design, reduced resource use, and environmental preservation.
              </li>
              <li>
                Technical Sustainability ensures the software is resilient,
                adaptable, and maintainable over time. It focuses on keeping the
                system reliable and able to evolve with changing technologies.
              </li>
            </ul>
          </div>
          <div>
            <h3>Software Quality Attributes (SQAs)</h3>
            <p>
              Software Quality Attributes represent the qualities you want your
              software to prioritize. Choosing the right ones will influence how
              sustainable your software becomes:
            </p>
            <ul>
              <li>
                Availability keeps the software running and accessible,
                minimizing downtime so users can rely on it anytime.
              </li>
              <li>
                Deployability ensures the software can be easily and smoothly
                released or updated with minimal errors or disruptions.
              </li>
              <li>
                Energy Efficiency focuses on reducing energy and resource use to
                lower environmental impact and operational costs.
              </li>
              <li>
                Integrability makes it easier for the software to connect and
                work well with other systems and platforms.
              </li>
              <li>
                Modifiability allows the software to be changed, updated, or
                extended without major effort or disruption.
              </li>
              <li>
                Performance ensures the software runs quickly and responds
                efficiently, delivering a smooth user experience.
              </li>
              <li>
                Safety protects users and systems by preventing harmful failures
                and maintaining operational integrity.
              </li>
              <li>
                Security guards the software against cyberattacks and data
                breaches, ensuring privacy and protection.
              </li>
              <li>
                Testability makes it easier to check the software for problems,
                improving reliability and confidence before release.
              </li>
              <li>
                Usability ensures the software is intuitive, user-friendly, and
                accessible so users can easily achieve their goals.
              </li>
            </ul>
          </div>
          <div>
            <h3>Design Patterns</h3>
            <p>
              Design patterns are technical solutions that influence how your
              software behaves and what trade-offs it makes. Choosing patterns
              carefully can improve certain qualities while impacting others:
            </p>
            <ul>
              <li>
                Active Redundancy (Hot Spare): Keeps backup components ready to
                take over instantly if something fails, improving availability.
              </li>
              <li>
                Triple Modular Redundancy (TMR): Uses three parallel systems
                with voting to increase fault tolerance and reliability.
              </li>
              <li>
                Microservices Architecture: Breaks the system into small
                independent services, allowing better deployability and
                flexibility.
              </li>
              <li>
                Blue/Green Deployment: Lets you switch between two identical
                environments for seamless updates with minimal downtime.
              </li>
              <li>
                Kill Abnormal Tasks: Stops unnecessary or malfunctioning
                processes to improve energy efficiency and reduce waste.
              </li>
              <li>
                Service-Oriented Architecture (SOA): Designs the system around
                modular services that are easy to integrate and reuse.
              </li>
              <li>
                Plug-in (Microkernel) Pattern: Allows adding new features as
                independent plug-ins without changing the core system.
              </li>
              <li>
                Load Balancer: Distributes workloads evenly across components to
                boost performance and prevent overload.
              </li>
              <li>
                Monitor-Actuator: Monitors system status and automatically
                triggers actions to maintain safety and prevent failures.
              </li>
              <li>
                Intrusion Prevention System (IPS): Detects and blocks security
                threats before they can harm the system.
              </li>
              <li>
                Dependency Injection Pattern: Reduces code dependency by
                injecting required components, improving testability and
                flexibility.
              </li>
              <li>
                Strategy Pattern: Enables switching between different strategies
                or algorithms without modifying core code.
              </li>
              <li>
                Model-View-Controller (MVC): Separates user interface, logic,
                and data to improve usability and maintainability.
              </li>
              <li>
                Observer Pattern: Automatically updates parts of the system when
                data changes, keeping interfaces responsive and current.
              </li>
            </ul>
          </div>
        </article>
      </Container>
    </StyleCheatsheet>
  );
};

export default Cheatsheet;
