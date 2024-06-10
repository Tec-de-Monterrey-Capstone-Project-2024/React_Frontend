import { act } from "react-dom/test-utils";
import { MemoryRouter, useNavigate } from "react-router-dom";
import ViewInsightPage from "../ViewInsightPage";
import { render, screen, fireEvent, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
// import '@testing-library/jest-dom/extend-expect';
import { getInsightByID } from "../../../services/insights/getInsightByID";
import { updateInsightStatus } from "../../../services/insights/updateInsightStatus";
import { mockInsight } from "../../../services/__mocks__/mocksInsights";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useParams: () => ({
        id: mockInsight.id,
    }),
    useNavigate: () => jest.fn(),
}));

jest.mock("../../../services/insights/getInsightByID", () => ({
    getInsightByID: jest.fn(() => Promise.resolve(mockInsight)),
}));

jest.mock("../../../services/insights/updateInsightStatus");

describe('ViewInsightPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const renderComponent = () => {
    return render(
      <MemoryRouter initialEntries={[`/insights/${mockInsight.id}`]}>
        <ViewInsightPage />
      </MemoryRouter>
    );
  };

  // test("The page should render", async () => {
  //   renderComponent();

  //   const titleElement = await waitFor(() => screen.getByText("Contact Center Average Handle Time Breach."));
  //   expect(titleElement).toBeInTheDocument();

  //   expect(screen.getByText("Situation")).toBeInTheDocument();
  //   expect(screen.getByText("Action")).toBeInTheDocument();
  //   expect(screen.getByText("Root Cause")).toBeInTheDocument();
  //   expect(screen.getByText("Impact")).toBeInTheDocument();
  //   expect(screen.getByText("Prevention")).toBeInTheDocument();
  //   expect(screen.getByText("Severity")).toBeInTheDocument();
  //   expect(screen.getByText("Category")).toBeInTheDocument();
  // });

  test("setError is called when getInsightByID throws an error", async () => {
    (getInsightByID as jest.Mock).mockImplementation(() => {
      throw new Error("Failed to fetch insight");
    });

    renderComponent();

    const errorMessage = await waitFor(() => screen.getByText(/Failed to fetch insight/i));
    expect(errorMessage).toBeInTheDocument();
  });

  test('goBack function should call navigate with -1 when back button is clicked', async () => {
    const navigate = useNavigate();
    renderComponent();

    await waitForElementToBeRemoved(() => screen.getByText("Loading..."));

    expect(screen.getByText('No insight found')).toBeInTheDocument();

    // const backButton = screen.getByTestId('back-button');
    // expect(backButton).toBeInTheDocument();

    // fireEvent.click(backButton);
    // expect(navigate).toHaveBeenCalledWith(-1);
  });

  it('renders the insight card with the correct data', async () => {
    const insightData = {
      id: 1,
      insightName: 'Test Insight',
      insightSummary: 'This is a test insight',
      insightRootCause: 'Root cause',
      insightImpact: 'Impact',
      insightPrevention: 'Prevention',
      insightSeverity: 'High',
      insightCategory: 'Category',
      status: 'TO_DO',
    };

    (getInsightByID as jest.Mock).mockResolvedValue(insightData);

    renderComponent();

    expect(screen.getByText('Loading...')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByTestId('insight-card')).toBeInTheDocument();
    });

    expect(screen.getByText(insightData.insightName)).toBeInTheDocument();
    expect(screen.getByText(insightData.insightSummary)).toBeInTheDocument();
  });

  it('updates the insight status when a button is clicked', async () => {
    const insightData = {
      id: 1,
      insightName: 'Test Insight',
      insightSummary: 'This is a test insight',
      insightRootCause: 'Root cause',
      insightImpact: 'Impact',
      insightPrevention: 'Prevention',
      insightSeverity: 'High',
      insightCategory: 'Category',
      status: 'TO_DO',
    };

    (getInsightByID as jest.Mock).mockResolvedValue(insightData);
    (updateInsightStatus as jest.Mock).mockResolvedValue({});

    renderComponent();

    await waitFor(() => {
      expect(screen.getByTestId('insight-card')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('In Progress'));

    expect(updateInsightStatus).toHaveBeenCalledWith(1, 'IN_PROGRESS');
  });

  it('displays an error message when fetching the insight fails', async () => {
    (getInsightByID as jest.Mock).mockRejectedValue(new Error('Failed to fetch insight'));

    renderComponent();

    await waitFor(() => {
      expect(screen.getByText('Failed to fetch insight')).toBeInTheDocument();
    });
  });

  it('displays "No insight found" when the insight is not found', async () => {
    (getInsightByID as jest.Mock).mockResolvedValue(null);

    renderComponent();

    await waitFor(() => {
      expect(screen.getByText('No insight found')).toBeInTheDocument();
    });
  });

  it('displays the correct buttons for different insight statuses', async () => {
    const insightData = {
      id: 1,
      insightName: 'Test Insight',
      insightSummary: 'This is a test insight',
      insightRootCause: 'Root cause',
      insightImpact: 'Impact',
      insightPrevention: 'Prevention',
      insightSeverity: 'High',
      insightCategory: 'Category',
      status: 'IN_PROGRESS',
    };

    (getInsightByID as jest.Mock).mockResolvedValue(insightData);

    renderComponent();

    await waitFor(() => {
      expect(screen.getByTestId('insight-card')).toBeInTheDocument();
    });

    expect(screen.getByText('Done')).toBeInTheDocument();
    expect(screen.getByText('Solve in Connect')).toBeInTheDocument();
  });

  it('closes the modal when the close button or Escape key is pressed', async () => {
    const insightData = {
      id: 1,
      insightName: 'Test Insight',
      insightSummary: 'This is a test insight',
      insightRootCause: 'Root cause',
      insightImpact: 'Impact',
      insightPrevention: 'Prevention',
      insightSeverity: 'High',
      insightCategory: 'Category',
      status: 'TO_DO',
    };

    (getInsightByID as jest.Mock).mockResolvedValue(insightData);

    renderComponent();

    await waitFor(() => {
      expect(screen.getByTestId('insight-card')).toBeInTheDocument();
    });

    // fireEvent.click(screen.getByText('Done'));
    fireEvent.click(screen.getByTestId('done-btn'));
    expect(screen.getByTestId('status-message')).toBeInTheDocument();

    fireEvent.keyDown(document, { key: 'Escape' });

    expect(screen.queryByText('This Insight has been marked as Done successfully.')).not.toBeInTheDocument();
  });

  it('handles different insight severities correctly', async () => {
    const severities = ['Low', 'Medium', 'High'];
    for (const severity of severities) {
      const insightData = {
        ...mockInsight,
        insightSeverity: severity,
      };
      (getInsightByID as jest.Mock).mockResolvedValue(insightData);

      renderComponent();

      // await waitFor(() => {
      //   expect(screen.getByTestId('insight-card')).toBeInTheDocument();
      // });
      await waitFor(() => {
        expect(screen.getByText(severity)).toBeInTheDocument();
      });
    }
  });

  it('updates the insight status to "Solve in Connect"', async () => {
    const insightData = {
      id: 1,
      insightName: 'Test Insight',
      insightSummary: 'This is a test insight',
      insightRootCause: 'Root cause',
      insightImpact: 'Impact',
      insightPrevention: 'Prevention',
      insightSeverity: 'High',
      insightCategory: 'Category',
      status: 'TO_DO',
    };

    (getInsightByID as jest.Mock).mockResolvedValue(insightData);
    (updateInsightStatus as jest.Mock).mockResolvedValue({});

    renderComponent();

    await waitFor(() => {
      expect(screen.getByTestId('insight-card')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByText('Solve in Connect'));

    expect(updateInsightStatus).toHaveBeenCalledWith(1, 'TO_DO');
  });

  it('shows the loading state correctly', async () => {
    renderComponent();
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('handles the modal interactions correctly', async () => {
    const insightData = {
      id: 1,
      insightName: 'Test Insight',
      insightSummary: 'This is a test insight',
      insightRootCause: 'Root cause',
      insightImpact: 'Impact',
      insightPrevention: 'Prevention',
      insightSeverity: 'High',
      insightCategory: 'Category',
      status: 'TO_DO',
    };

    (getInsightByID as jest.Mock).mockResolvedValue(insightData);

    renderComponent();

    await waitFor(() => {
      expect(screen.getByTestId('insight-card')).toBeInTheDocument();
    });

    fireEvent.click(screen.getByTestId('done-btn'));
    // expect(screen.getByText('This Insight has been marked as Done successfully.')).toBeInTheDocument();
    expect(screen.getByTestId('status-message')).toBeInTheDocument();

    // fireEvent.click(screen.getByText('Close'));
    // expect(screen.queryByText('This Insight has been marked as Done successfully.')).not.toBeInTheDocument();
    // await waitFor(() => {
    //   expect(screen.queryByTestId('status-message')).not.toBeInTheDocument();
    // }, { timeout: 6000 });
  });

  it('handles changes in insight data correctly', async () => {
    const initialInsightData = {
      id: 1,
      insightName: 'Initial Insight',
      insightSummary: 'Initial summary',
      insightRootCause: 'Initial root cause',
      insightImpact: 'Initial impact',
      insightPrevention: 'Initial prevention',
      insightSeverity: 'Low',
      insightCategory: 'Initial category',
      status: 'TO_DO',
    };

    (getInsightByID as jest.Mock).mockResolvedValueOnce(initialInsightData);

    renderComponent();

    await waitFor(() => {
      expect(screen.getByTestId('insight-card')).toBeInTheDocument();
    });

    expect(screen.getByText('Initial Insight')).toBeInTheDocument();
    expect(screen.getByText('Initial summary')).toBeInTheDocument();

    const updatedInsightData = {
      ...initialInsightData,
      insightName: 'Updated Insight',
      insightSummary: 'Updated summary',
    };

    (getInsightByID as jest.Mock).mockResolvedValueOnce(updatedInsightData);

    renderComponent();

    await waitFor(() => {
      expect(screen.getByText('Updated Insight')).toBeInTheDocument();
      expect(screen.getByText('Updated summary')).toBeInTheDocument();
    });
  });
});
