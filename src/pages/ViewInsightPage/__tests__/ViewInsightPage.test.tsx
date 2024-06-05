import React, {act} from "react";
import { MemoryRouter } from "react-router-dom";
import ViewInsightPage from "../ViewInsightPage";
import { render, screen } from "@testing-library/react";
import { mockInsight } from "../../../context/_mocks_/mocksInsights";

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

describe("Test ViewInsightPage", () => {
  test("The page should render", async () => {
    await act(async () => {
      render(
        <MemoryRouter initialEntries={[`/insights/${mockInsight.id}`]}>
          <ViewInsightPage />
        </MemoryRouter>
      );
    });

  });
});