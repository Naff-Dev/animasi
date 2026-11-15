import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  title?: string;
  onReset?: () => void;
}

interface State {
  hasError: boolean;
  message: string;
}

export class ComponentErrorBoundary extends Component<Props, State> {
  public state: State = { hasError: false, message: "" };

  public static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      message: error.message || "Terjadi kendala saat menampilkan modul ini.",
    };
  }

  public componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Social publisher panel error:", error, info.componentStack);
  }

  private handleReset = () => {
    this.setState({ hasError: false, message: "" });
    this.props.onReset?.();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="panel error-box" role="alert">
          <h2 className="panel-title">{this.props.title ?? "Panel Bermasalah"}</h2>
          <p className="muted-copy">{this.state.message}</p>
          <button type="button" className="btn btn-secondary" onClick={this.handleReset}>
            Muat Ulang Panel
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
