## Working with PDFs in Rust using lopdf

This guide explains how to use the `lopdf` crate in Rust to create, merge, and modify PDF documents programmatically.
[lopdf document](https://docs.rs/lopdf/latest/lopdf/struct.Document.html)

### Building Blocks of a PDF Document

- **Objects:** These represent various elements like text, images, and layouts (dictionaries, streams, and arrays). You create them with `doc.add_object()`.
- **Object IDs:** These are unique identifiers assigned to each object in the document.
- **Dictionaries:** These store key-value pairs defining properties (use `dictionary!` macro for easy creation).
- **Streams:** These hold the actual content like text and images.
- **Content:** This wraps operations (`Operation` structs) that define how things are drawn on the page.
- **Operations:** These are individual drawing commands (like setting font, moving text position, showing text). They consist of an operator string (e.g., "BT") and arguments.

To add content, you define a series of operations and encode them into a stream. Finally, use `doc.save()` to write the PDF to a file.

### Merging PDFs

You can combine multiple PDFs using functions like `renumber_objects_with` and `get_pages`.

### Modifying Existing PDFs

1. Load the PDF with `Document::load()`.
2. Modify properties or content (e.g., replace text with `replace_text()`).
3. Save the changes with `doc.save()`.

### Library Design

`lopdf` keeps the entire document in memory as high-level objects for easier manipulation. This simplifies things like calculating stream lengths and results in smaller PDFs.

### Important Concepts

- **Reverse Order**: Operations are defined in the opposite order they appear in the final PDF.
- **Font Scaling**: Font scaling in PDFs can be complex, so refer to the documentation for details.
- **Y-Coordinate System**: The Y-axis starts from the bottom, so higher values are closer to the top of the page.

### Additional Notes

- This guide focuses on text manipulation. Explore the `lopdf` documentation for handling images and other multimedia content.
- The `dictionary!` macro simplifies creating nested dictionaries.
- The `Object` enum represents different object types in the PDF.
- Object IDs are essential for linking objects within the PDF structure.
