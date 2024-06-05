import React from "react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ViewInsightPage from "../ViewInsightPage";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { getInsightByID } from "../../../services/insights/getInsightByID";
import { mockInsight } from "../../../services/insights/__mocks__/mocksInsights";

jest.mock("../../../services/insights/getInsightByID");

afterEach(() => {
  cleanup();
});

describe("Test ViewInsightPage", () => {
  test("The page should render", async () => {

    (getInsightByID as jest.Mock).mockResolvedValue(mockInsight);

    render(
      <MemoryRouter initialEntries={['/insight/1']}>
        <Routes>
          <Route path="/insight/:id" element={<ViewInsightPage />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText("Contact Center Average Handle Time Breach.")).toBeInTheDocument();
    });

    expect(screen.getByTestId("insight-card")).toBeTruthy();
  });
});
