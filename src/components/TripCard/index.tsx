import React from 'react';
import Card from '../Card';
import './index.scss';

interface TripCardProps {
  id: string;
  title: string;
  coverImage: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  likes?: number;
  comments?: number;
  onClick?: () => void;
}

const TripCard: React.FC<TripCardProps> = ({
  title,
  coverImage,
  location,
  startDate,
  endDate,
  description,
  likes = 0,
  comments = 0,
  onClick,
}) => {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString();
  };

  const extra = (
    <div className="td-trip-card__stats">
      <span className="td-trip-card__stat">
        <i className="td-trip-card__icon td-trip-card__icon--like" />
        {likes}
      </span>
      <span className="td-trip-card__stat">
        <i className="td-trip-card__icon td-trip-card__icon--comment" />
        {comments}
      </span>
    </div>
  );

  return (
    <Card
      className="td-trip-card"
      cover={
        <div className="td-trip-card__cover">
          <img src={coverImage} alt={title} />
          <div className="td-trip-card__location">
            <i className="td-trip-card__icon td-trip-card__icon--location" />
            {location}
          </div>
        </div>
      }
      title={title}
      extra={extra}
      hoverable
      onClick={onClick}
    >
      <div className="td-trip-card__content">
        <div className="td-trip-card__dates">
          {formatDate(startDate)} - {formatDate(endDate)}
        </div>
        <p className="td-trip-card__description">{description}</p>
      </div>
    </Card>
  );
};

export default TripCard;