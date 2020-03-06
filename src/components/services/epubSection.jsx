import React, { Component } from "react";
import epubS from "../../css_files/images/epubS.svg";

const EpubSection = () => {
  return (
    <div className="epub_section" id="epubSection1">
      <div className="epub_text">
        <h3> Fixed Layout Conversion</h3>
        <p>
          If you think that one ePUB file format can run smoothly on all the
          eReading devices, then you are thinking wrong. Almost device
          manufacturers make a distinction in their products to set themselves
          as exclusive in the digital market. In this scenario, while converting
          your books into Fixed Layout Format eBooks, you need to be responsive
          to the details of specific devices. At VJ Solutions, we provide high
          quality Fixed Layout Conversion services on affordable prices. Our
          e-book conversion experts can help you in creating fixed-layout books
          for all major products including Comics, Page Perfect and Kids
          integrated with ‘Read to Me’ as well as ‘Read and Play’. From the
          coders’ point of view, fixed layout ebooks conversion is different
          from the traditional or re-flow-able text e-books creation because it
          has fixed content in reading app “page”, it brings the text in sync
          with the design and adds semantic value to the content with rich
          typographic layout.
        </p>
        <h4>What our fixed layout ebook conversion services include?</h4>
        <p>
          By converting or creating your books into fixed layout format, we
          enable you to provide your audiences a better reading experience. We
          create fixed layout ePUB files with a stunning and simple look so that
          eBook readers can enjoy reading without any difficulty. Our
          professionals can deliver you a fixed layout format, where text would
          be completely synchronised with the book design. We have expertise in
          converting complex designs & image / graphic-heavy titles into
          fixed-layout eBooks. Our fixed layout conversion specialists
          frequently reproduce following types of books:
        </p>
        <ul className="epubl">
          <li className="lists">
            <h4>Restaurant guides</h4>
          </li>
          <li className="lists">
            <h4>Travel guides</h4>
          </li>
          <li className="lists">
            <h4>Children’s picture books</h4>
          </li>
          <li className="lists">
            <h4>Cookery books</h4>
          </li>
          <li className="lists">
            <h4>Text books and learning materials</h4>
          </li>
          <li className="lists">
            <h4>Company reports and annual reviews</h4>
          </li>
          <li className="lists">
            <h4>Academic publications</h4>
          </li>
        </ul>
      </div>
      <img src={epubS} alt="" className="epubS" />
    </div>
  );
};

export default EpubSection;
