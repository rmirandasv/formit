interface ImportMeta {
  glob: (
    pattern: string,
    options?: { eager?: boolean },
  ) => Record<string, React.ComponentType<T>>;
}
